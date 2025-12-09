type CpsMutation = CustomEvent<{ mutationList: MutationRecord[] }>;

declare global {
  interface GlobalEventHandlersEventMap {
    'cps-mutation': CpsMutation;
  }
}

export default CpsMutation;
