import { Button } from '../../../components/layout/Button'
import { shallow } from 'enzyme'

describe('Pruebas a <Button/>', () => {
  test('Debe de mostrarse correctamente', () => {
    const wrapper = shallow(<Button>Haz Click</Button>)
    expect(wrapper).toMatchSnapshot()
  })
})
