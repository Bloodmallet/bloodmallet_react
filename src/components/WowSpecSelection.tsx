import React from 'react';
// import Nav from 'react-bootstrap/Nav';

import './bootstrap_styles/base.scss';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';

interface WowSpecSelectionProps {
    wowClass: string;
    wowSpec?: string;
    setWowSpec: Function;
};


interface SpecDict {
    [key: string]: string[];
};

class WowSpecSelection extends React.Component<WowSpecSelectionProps> {

    constructor(props: WowSpecSelectionProps) {
        super(props);

        this.setWowSpec = this.setWowSpec.bind(this);
    }

    setWowSpec(name: string) {
        this.props.setWowSpec(name);
    }

    render() {

        // wow classes that can be found in the drop down
        const wow_specs: SpecDict = {
            'death_knight': ['blood', 'frost', 'unholy'],
            'demon_hunter': ['havoc', 'vengeance'],
            'druid': ['balance', 'feral', 'guardian'],
            'hunter': ['beast_mastery', 'marksmanship', 'survival'],
            'mage': ['arcane', 'fire', 'frost'],
            'monk': ['brewmaster', 'windwalker'],
            'paladin': ['protection', 'retribution'],
            'priest': ['shadow'],
            'rogue': ['assassination', 'outlaw', 'subtlety'],
            'shaman': ['elemental', 'enhancement', 'restoration'],
            'warlock': ['affliction', 'demonology', 'destruction'],
            'warrior': ['arms', 'fury', 'protection']
        };

        const relevant_specs = wow_specs[this.props.wowClass];

        // Set first spec as active if no spec was selected or a spec of a different class was active.
        if (this.props.wowSpec === undefined || this.props.wowSpec === '' || relevant_specs.indexOf(this.props.wowSpec) === -1) {
            this.setWowSpec(relevant_specs[0]);
        }

        const inactive_classes = this.props.wowClass + '-color ' + this.props.wowClass + '-menu-border';
        const active_classes = this.props.wowClass + '-color ' + this.props.wowClass + '-menu-border active';


        return (
            <>
                {relevant_specs.map((wow_spec) =>
                    <NavItem key={wow_spec}>
                        <NavLink className={this.props.wowSpec === wow_spec ? active_classes : inactive_classes} onClick={this.setWowSpec.bind(this, wow_spec)}>{wow_spec}</NavLink>
                    </NavItem>
                )}
            </>
        );
    }
}


export default WowSpecSelection;
