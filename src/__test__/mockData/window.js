export function MockWindow(){
  global.window = {
    addEventListener: jest.fn(),
    removeEventListener: jest.fn()
  }
}