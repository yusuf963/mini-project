import './styles.platform.css';

export const Platform = ({ platform, updateCategory }) => {
  const { name, icon, description, link, category } = platform;

  return (
    <div className="platform-links__link">
      <img className="platform-links__link-icon" src={icon} alt={name} />
      <p className="platform-links__link-name">{name}</p>
      <p className="platform-links__link-description">{description}</p>
      <div className="platform-links__link-footer">
        <span
          className="platform-links__link-category"
          onClick={() => updateCategory(category)}
        >
          {category}
        </span>
        <a
          className="platform-links__link-cta"
          href={link}
          target="_blank"
          rel="noreferrer"
        >
          Go
        </a>
      </div>
    </div>
  );
};
