import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

export const mockStore = (state = {}) =>
  configureMockStore([ thunk ])(state)










