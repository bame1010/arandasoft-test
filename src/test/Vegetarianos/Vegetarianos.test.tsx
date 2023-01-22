/* eslint-disable testing-library/no-wait-for-side-effects */
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import Vegetarianos from "@pages/Vegetarianos";
import axios from "axios";
import {
  render,
  screen,
  waitFor,
  fireEvent,
  createEvent,
} from "@testing-library/react";

// -- Mock de axios
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

//-- Mock de redux
const mockStore = configureMockStore([thunk]);
const store = mockStore({
  recipe: {
    recipes: [
      {
        name: "receta uno",
        quality: "5.0",
        image: "img",
      },
      {
        name: "receta dos",
        quality: "5.0",
        image: "img",
      },
    ],
  },
});

describe("Vegetarianos Test", () => {
  beforeEach(() => {
    document.body.innerHTML = "";
  });

  test("Should be render Vegetarianos", async () => {
    mockedAxios.get.mockResolvedValue({
      data: {
        results: [
          {
            id: 12345,
            title: "receta uno",
            image: "img",
            imageType: "png",
          },
          {
            id: 6789,
            title: "receta dos",
            image: "img",
            imageType: "png",
          },
        ],
      },
    });
    await waitFor(() => {
      render(
        <Provider store={store}>
          <Vegetarianos />
        </Provider>
      );
    });

    expect(screen.getByText(/Vegetarianos/)).toBeInTheDocument();
  });

  test("Should be two cards render", async () => {
    mockedAxios.get.mockResolvedValue({
      data: {
        results: [
          {
            id: 12345,
            title: "receta uno",
            image: "img",
            imageType: "png",
          },
          {
            id: 6789,
            title: "receta dos",
            image: "img",
            imageType: "png",
          },
        ],
      },
    });
    await waitFor(() => {
      render(
        <Provider store={store}>
          <Vegetarianos />
        </Provider>
      );
    });

    const card0 = await screen.findByTestId("card_0");
    const card1 = await screen.findByTestId("card_1");

    expect(card0).toBeInTheDocument();
    expect(card1).toBeInTheDocument();
  });

  test.skip("Click Btn", async () => {
    mockedAxios.get.mockResolvedValue({
      data: {
        results: [
          {
            id: 12345,
            title: "receta uno",
            image: "img",
            imageType: "png",
          },
          {
            id: 6789,
            title: "receta dos",
            image: "img",
            imageType: "png",
          },
        ],
      },
    });
    await waitFor(() => {
      render(
        <Provider store={store}>
          <Vegetarianos />
        </Provider>
      );
    });

    const btn = screen.getByTestId("btntest");

    const myEvent = createEvent.click(btn);
    fireEvent(btn, myEvent);
    expect(myEvent.preventDefault).toBeTruthy();

    // fireEvent.click(btn);
    // expect(screen.getByText(/alexis/)).toBeInTheDocument();
  });

  //   test.skip("Disable dispatch login", async () => {
  //     mockedAxios.get.mockResolvedValue({});
  //     await waitFor(() => {
  //       render(
  //         <Provider store={store}>
  //           <Login />
  //         </Provider>
  //       );
  //     });

  //     const usernameInput = screen.getByTestId("username");
  //     const passwordInput = screen.getByTestId("password");
  //     const loginButton = screen.getByTestId("login");

  //     fireEvent.change(usernameInput, {
  //       target: { name: "username", value: "" },
  //     });
  //     fireEvent.change(passwordInput, {
  //       target: { name: "password", value: "" },
  //     });

  //     fireEvent.click(loginButton);

  //     expect(mockedAxios.get).not.toHaveBeenCalled();
  //   });

  //   test.skip("Should be dispatch login", async () => {
  //     mockedAxios.get.mockResolvedValue({});
  //     await waitFor(() => {
  //       render(
  //         <Provider store={store}>
  //           <Login />
  //         </Provider>
  //       );
  //     });

  //     const usernameInput = screen.getByTestId("username");
  //     const passwordInput = screen.getByTestId("password");
  //     const loginButton = screen.getByTestId("login");

  //     fireEvent.change(usernameInput, {
  //       target: { name: "username", value: "user" },
  //     });
  //     fireEvent.change(passwordInput, {
  //       target: { name: "password", value: "1234" },
  //     });

  //     const myEvent = createEvent.click(loginButton);

  //     fireEvent(loginButton, myEvent);

  //     expect(myEvent.preventDefault).toBeTruthy();
  //     expect(mockedAxios.get).toHaveBeenCalledTimes(1);
  //   });
});
