/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {Middleware} from 'redux';
import {RootState} from '../store';

const logger: Middleware<{}, RootState> = (store) => (next) => (action) => {
  console.log('DISPATCH', action);
  const result: any = next(action);
  console.log('STATE', JSON.stringify(store.getState()));

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return result;
};

export default logger;
