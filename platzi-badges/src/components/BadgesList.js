import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

import './styles/BadgesList.css';
import Gravatar from './Gravatar';

class BadgesListItem extends React.Component {
  render() {
    return (
      <div className="BadgesListItem">
        <Gravatar
          className="BadgesListItem__avatar"
          email={this.props.badge.email}
        />

        <div>
          <strong>
            {this.props.badge.firstName} {this.props.badge.lastName}
          </strong>
          <br />@{this.props.badge.twitter}
          <br />
          {this.props.badge.jobTitle}
        </div>
      </div>
    );
  }
}

function useSearchBadge(badges) {
  const [query, setQuery] = useState("")
  const [filteredBadges, setFilteredBadges] = useState(badges)

  useMemo(() => {
    const result = badges.filter(badge => {
      return `${badge.firstName} ${badge.lastName}`.toLowerCase().includes(query.toLowerCase())
    })
    setFilteredBadges(result)  
  }, [badges, query])

  return {query, setQuery, filteredBadges}
}

function BadgesList(props) {
  const badges = props.badges

  const {query, setQuery, filteredBadges} = useSearchBadge(badges)

  if (filteredBadges.length === 0) {
    return (
      <div>
        <div data-test-id="filter-badges" className="form-group">
          <label>Filter Badge</label>
          <input type="text" className="form-control"
            data-test-id="filter-badges-input"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
        </div>
        <h3>No badges were found</h3>
        <Link className="btn btn-primary" to="/badges/new">
          Create new badge
          </Link>
      </div>
    );
  }

  return (
    <div className="BadgesList">
      <div data-test-id="filter-badges" className="form-group">
        <label>Filter Badge</label>
        <input type="text" className="form-control"
          data-test-id="filter-badges-input"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </div>
      <ul data-test-id="badges-list" className="list-unstyled">
        {filteredBadges.map(badge => {
          return (
            <li key={badge.id}>
              <Link
                className="text-reset text-decoration-none"
                to={`/badges/${badge.id}`}
              >
                <BadgesListItem badge={badge} />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default BadgesList;
