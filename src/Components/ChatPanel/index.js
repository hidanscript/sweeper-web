import React from 'react';
import AvatarPanel from '../AvatarPanel';

import './index.css';
import Placeholder from '../../lib/Placeholder';

export default function ChatPanel() {
    return (
        <div className="chat-panel">
            <AvatarPanel />

            <div className="planet-placeholder">
                <img src={ Placeholder.Planet } alt="planet" />
                <p>No contacts available</p>
            </div>
        </div>
    );
}
