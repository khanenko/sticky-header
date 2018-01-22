import React from 'react';
import PropTypes from 'prop-types';

require('../css/StickyHeader.css');

export default class StickyHeader extends React.Component {
    componentDidMount() {
        const body = document.body;
        const docEl = document.documentElement;
        const scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
        const clientTop = docEl.clientTop || body.clientTop || 0;

        const setInitialHeights = (elements) => {
            [].forEach.call(elements, (sticky) => {
                const box = sticky.getBoundingClientRect();
                const top = box.top + scrollTop - clientTop;

                sticky.setAttribute('data-sticky-initial', `${top}`);
            });
        };

        const stickies = document.querySelectorAll('[data-sticky]');
        setInitialHeights(stickies);

        document.addEventListener('scroll', () => {
            const top = window.pageYOffset || docEl.scrollTop || body.scrollTop;
            const bottom = docEl.scrollHeight || body.scrollHeight;

            [].forEach.call(stickies, (sticky) => {
                const stickyInitial = parseInt(sticky.getAttribute('data-sticky-initial'), 10);
                const stickyEnter = parseInt(sticky.getAttribute('data-sticky-enter'), 10) || stickyInitial;
                const stickyExit = parseInt(sticky.getAttribute('data-sticky-exit'), 10) || bottom;

                if (top >= stickyEnter && top <= stickyExit) {
                    sticky.classList.add('sticky');
                } else {
                    sticky.classList.remove('sticky');
                }
            });
        });
    }

    render() {
        const { className, enter, exit, children } = this.props;
        return (<div
            className={`StickyHeader ${className}`}
            data-sticky
            data-sticky-enter={enter}
            data-sticky-exit={exit}
        >
            {children}
        </div>);
    }
}

StickyHeader.propTypes = {
    className: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};