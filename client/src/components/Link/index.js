import "./styles.link.css";

export const Link = ({ platform, updateCategory }) => {
	const { name, icon, description, link, category } = platform;

	return platform ? (
		<div className="platform-links__link">
			<div className="platform-links__link-header">
				{icon && <img className="platform-links__link-icon" src={icon} alt={name} />}
				<h3 className="platform-links__link-name">{name}</h3>
			</div>
			<div className="platform-links__link-body">
				<span className="platform-links__link-description">{description}</span>
			</div>
			<div className="platform-links__link-footer">
				<span className="platform-links__link-category" onClick={() => updateCategory(category)}>
					{category ? `#${category}` : ''}
				</span>
				<a className="platform-links__link-cta" href={link} target="_blank" rel="noreferrer">
					Go
				</a>
			</div>
		</div>
	) : null;
};
