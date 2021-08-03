import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Mybutton from './CustomButton'

describe("Button renders correctly", () => {
    test("should match snapshot", () => {
      const { asFragment } = render(<Mybutton />);
      expect(asFragment()).toMatchSnapshot();
    });
  
    // test("Button can be clicked", () => {
    //   let checked = false;
    //   const onClick = jest.fn();
  
    //   const { container } = render(
    //     <Mybutton
    //       onClick={onClick}
    //       data-testid="button"
    //     />
    //   );
    //   screen.getByTestId("button");
    //   userEvent.click(container.querySelector("button"));
    //   expect(onClick).toHaveBeenCalled();
    // });
  });
  