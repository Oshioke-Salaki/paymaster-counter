/// Interface representing `HelloContract`.
/// This interface allows modification and retrieval of the contract count.
#[starknet::interface]
pub trait ICounter<TContractState> {
    /// Increase contract count.
    fn increase_count(ref self: TContractState, amount: u16);
    /// Increase contract count
    fn decrease_count(ref self: TContractState, amount: u16);
    /// Retrieve contract count.
    fn get_count(self: @TContractState) -> u16;
}

/// Simple contract for managing count.
#[starknet::contract]
mod Counter {
    use starknet::storage::{StoragePointerReadAccess, StoragePointerWriteAccess};

    #[storage]
    struct Storage {
        count: u16,
    }

    #[abi(embed_v0)]
    impl CounterImpl of super::ICounter<ContractState> {
        fn increase_count(ref self: ContractState, amount: u16) {
            assert(amount != 0, 'Amount cannot be 0');
            self.count.write(self.count.read() + amount);
        }

        fn decrease_count(ref self: ContractState, amount: u16) {
            assert(amount != 0, 'Amount cannot be 0');
            self.count.write(self.count.read() - amount);
        }

        fn get_count(self: @ContractState) -> u16 {
            self.count.read()
        }
    }
}
