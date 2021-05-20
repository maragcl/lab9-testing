import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent,render } from '@testing-library/react'

import App from './App'

test('renders content', () => {
    const nameFilter = {
       content: 'this is a test',
       important: true
    }
    

    const component = render(<App nameFilter={nameFilter}/>)
    console.log(component)
    //component.getByText('this is a test')
    
    //component.getByText('make not important')
    //expect(componnent.container).toHaveTextContent(nameFilter.content)

    //const el = component.getByText('This is a test')
    //expect(el).toBeDefined()

    //const li = component.container.querySelector('li')
    //console.log(prettyDOM(li))
})
test('clicking the button calls event handler once', () => { 
    const nameFilter = {
        content: 'this is a test',
        important: true
     }
     const mockHandler = jets.fin()

     const component = render(<App nameFilter={nameFilter} toggleImportance={mockHandler}/>)
     const button = component.getByText('make not important')
     fireEvent.click(button) 

     expect(monckHandler.mock.calls).toHaveLength(1)
}) 