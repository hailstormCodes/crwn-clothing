import React from "react";
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import MenuItem from "../menu-item/menu-item.component";

import "../menu-item/menu-item.styles.scss";
import "../directory/directory.styles.scss";

const Directory = ({ sections }) => {
    return (
      <div className='directory-menu'>
        {sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps } />
        ))}
      </div>
    );
  }

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);
