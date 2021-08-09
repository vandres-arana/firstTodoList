
const logger = (store: any) => (next: any) => (action: any) => {
  console.log('DISPATCH', action);
  const result = next(action);
  console.log('STATE', JSON.stringify(store.getState()))
  
  return result;
}

export default logger;