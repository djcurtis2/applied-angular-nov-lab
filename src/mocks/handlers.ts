import fakeBankApi from './bank-handler';
import booksHandler from './books-handler';
import featureHandlers from './features-handler';

export const handlers = [...fakeBankApi, ...featureHandlers, ...booksHandler];
