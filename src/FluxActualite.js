import React from 'react';
import Actualite from './Actualite';
import uniqid from 'uniqid';

export default class FluxActualite extends React.Component {
    render () {
        const { actualites } = this.props;
        return (
            <div className="FluxActualite">
                {actualites.map((actualite) => <Actualite key={uniqid()} actualite={actualite} />)}
            </div>
        )
    }
}
