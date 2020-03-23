import React from 'react'
import Placeholder from '../../lib/Placeholder';

import './index.css';

export default function AvatarPanel() {

    console.log(Placeholder.Messages);

    return (
        <div className="avatar-panel">
            <img className="avatar-panel-avatar" src={Placeholder.Avatar} alt="avatar"/>

            <div className="options">
                <i className="fas fa-ellipsis-v"></i>
                <div className="background"></div>
            </div>

        </div>
    );
}
