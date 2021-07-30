import React, { Component } from 'react';

export class Services extends Component {
    render() {
        return (
            <>
                <div className="split">
                    <div className="graphic-design">
                        <span>Graphic Design</span>
                        <p> Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.
                        </p>
                    </div>
                    <div className="photography">
                        <span>
                        Photography
                        </span>
                        <p>
                        Increase your credibility by getting the most stunning, high-quality photos that improve your business image.
                        </p>
                    </div>
                </div>
                
            </>
        )
    }
}
