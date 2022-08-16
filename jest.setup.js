import '@testing-library/jest-dom/extend-expect'
import Enzyme from 'enzyme'
import { createSerializer } from 'enzyme-to-json'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

Enzyme.configure({ adapter: new Adapter() })
// eslint-disable-next-line no-undef
expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }))
