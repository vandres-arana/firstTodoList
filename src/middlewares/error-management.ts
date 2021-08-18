import DataException from '../exceptions/data-exception';

const errorHandler = () => (next: any) => (action: any) => {
  try {
    return next(action);
  } catch (error) {
    console.error(`[Store] - Exception on ${JSON.stringify(action)}`, error);

    if (error instanceof DataException) {
      return;
    }

    throw error;
  }
};

export default errorHandler;
