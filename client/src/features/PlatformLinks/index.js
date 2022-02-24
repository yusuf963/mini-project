import { Fragment, useState, useCallback } from 'react';
import { Link } from '../../components/Link';
import { platforms } from '../../data/platforms';

import './styles.platformLinks.css';

const PlatformLinks = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const updateCategory = useCallback(
    (categoryName) => {
      setSelectedCategory(categoryName);
    },
    []
  );

	return (
    <Fragment>
      {selectedCategory && (
        <span className='platform-links__selected-category'>
          <h2>{selectedCategory}</h2>
          <button className='clear' onClick={() => setSelectedCategory('')}>CLEAR</button>
        </span>
      )}
      <section className='platform-links'>
        {platforms.filter(platform => selectedCategory ? platform.category === selectedCategory : true).map((platform, index) => (
          <Link key={index} platform={platform} updateCategory={updateCategory} />
        ))}
      </section>
    </Fragment>
	);
};

export default PlatformLinks;
