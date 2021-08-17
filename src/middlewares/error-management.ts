import DataException from '../exceptions/data-exception';

const errorHandler = (store: any) => (next: any) => (action: any) => {
  try {
    return next(action);
  } catch (error) {
    console.error(`[Store] - Exception on ${JSON.stringify(action)}`, error);
    
    if (error instanceof DataException) {
      alert('Please, Review your data');
      return;
    }

    throw error;
  }
};

export default errorHandler;