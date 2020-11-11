
import React, { PureComponent } from 'react';
import { createConn, Handler } from './client';
import ContextWS from './ContextWS';

class ProviderWS extends PureComponent {
    closeConn: Function = () => { };
    static subscriptions: Set<Handler> = new Set();

    static subscribe = (handler: Handler) => {
        ProviderWS.subscriptions.add(handler);
        return function unsubscribe() {
            if (ProviderWS.subscriptions.has(handler)) {
                ProviderWS.subscriptions.delete(handler);
            }
        }
    }

    handler: Handler = (evt) => {
        ProviderWS.subscriptions.forEach(function(handler) {
            handler(evt);
        });
    };

    componentDidMount() {
        this.closeConn = createConn('/ws', this.handler);
    }

    componentWillUnmount() {
        this.closeConn();
    }

    render() {
        return (
            <ContextWS.Provider value={this.state}>
                {this.props.children}
            </ContextWS.Provider>
        );
    }
};

export default ProviderWS;
