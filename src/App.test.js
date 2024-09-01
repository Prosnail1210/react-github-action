import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('the counter starts at 0', () => {
  render(<App />);
  const counterElement = screen.getByTestId('counter')
  expect(counterElement).toHaveTextContent(0)

});

test('minus button has correct text',()=>{
  render(<App/>)
  const buttonElement = screen.getByTestId('minus-button')
  expect(buttonElement).toHaveTextContent('-')
})

test('plus button has correct text',()=>{
  render(<App/>)
  const buttonElement = screen.getByTestId('plus-button')
  expect(buttonElement).toHaveTextContent('+')
})

test('when the + button is pressed, the counter changes to 1',()=>{
  render(<App/>)
  const buttonElement = screen.getByTestId('plus-button')
  fireEvent.click(buttonElement)
  const counterElement = screen.getByTestId('counter')
  expect(counterElement).toHaveTextContent(1)
})

test('on/off butoon has blue color',()=>{
  render(<App/>)
  const buttonElement = screen.getByTestId('on/off-button')
  expect(buttonElement).toHaveStyle({backgroundColor: 'blue'})
})

test('prevent the -,+ button from being prssed when the on/off button is clicked',()=>{
  render(<App />)
  const onOffBUttonElement = screen.getByTestId('on/off-button')
  fireEvent.click(onOffBUttonElement)
  const plusButtonElement = screen.getByTestId('plus-button')
  expect(plusButtonElement).toBeDisabled()
})

test('when two button clicked, counter +2',()=>{
  render(<App/>)
  const twoButtonElemnet = screen.getByTestId('plus-two-button')
  fireEvent.click(twoButtonElemnet)
  const counterElement = screen.getByTestId('counter')
  expect(counterElement).toHaveTextContent(2)
})

test('when two button clicked, counter +3',()=>{
  render(<App/>)
  const twoButtonElemnet = screen.getByTestId('plus-three-button')
  fireEvent.click(twoButtonElemnet)
  const counterElement = screen.getByTestId('counter')
  expect(counterElement).toHaveTextContent(3)
})

test('when two button clicked, counter +4',()=>{
  render(<App/>)
  const twoButtonElemnet = screen.getByTestId('plus-four-button')
  fireEvent.click(twoButtonElemnet)
  const counterElement = screen.getByTestId('counter')
  expect(counterElement).toHaveTextContent(4)
})

test('when two button clicked, counter +5',()=>{
  render(<App/>)
  const twoButtonElemnet = screen.getByTestId('plus-five-button')
  fireEvent.click(twoButtonElemnet)
  const counterElement = screen.getByTestId('counter')
  expect(counterElement).toHaveTextContent(5)
})

test('when two button clicked, counter -5',()=>{
  render(<App/>)
  const twoButtonElemnet = screen.getByTestId('minus-five-button')
  fireEvent.click(twoButtonElemnet)
  const counterElement = screen.getByTestId('counter')
  expect(counterElement).toHaveTextContent(-5)
})