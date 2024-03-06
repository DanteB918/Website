import { render, screen } from '@testing-library/react';
import { act } from "react-dom/test-utils";
import About from './About';
import { Provider } from 'react-redux';
import store from './store';
import { HashRouter } from 'react-router-dom';
import Footer from './Footer';

it("About contains correct name", () => {
    act(() => {
        render(
            <Provider store={store}>
                <HashRouter>
                    <About />
                </HashRouter>
            </Provider>
        );
    });

    const bioElement = screen.getByText(/Dante Bradshaw/);
    expect(bioElement.textContent).toContain("I'm Dante Bradshaw");
});

it("Footer contains current year", () => {
    act(() => {
        render(
            <HashRouter>
                <Footer />
            </HashRouter>
        );
    });

    const footerElement = screen.getByText(/Created by/);
    expect(footerElement.textContent).toContain(new Date().getFullYear().toString());
});
