import "html-validate/jest";
import render from '../helpers/renderHtml';
import { MockDesktopNavigator } from "./mockData/navigator";
import { getMockDesktopRequest, getMockMobileRequest } from "./mockData/request";

test('valid html by desktop', async () => {
  const html = await render(getMockDesktopRequest());
  expect(html).toHTMLValidate();
});

test('valid html by mobile', async () => {
  const html = await render(getMockMobileRequest());
  expect(html).toHTMLValidate();
});


test('render error', async () => {
  MockDesktopNavigator();
  const html = await render();
  expect(html).toBe(undefined);
});