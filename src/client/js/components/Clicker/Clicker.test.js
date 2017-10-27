import React from 'react'
import {shallow} from 'enzyme'
import {Clicker} from './Clicker'

let updateClickCount, wrapper

beforeEach(() => {
    updateClickCount = jest.fn()
    wrapper = shallow(
        <Clicker updateClickCount={updateClickCount} counter={0} joke={''} />
    )
})

test('should render Clicker component correctly', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should handle updateClickCount', () => {
    const image = wrapper.find('img')
    image.simulate('click')
    expect(updateClickCount.mock.calls.length).toBe(1)
    expect(updateClickCount).toHaveBeenLastCalledWith(0)
})
