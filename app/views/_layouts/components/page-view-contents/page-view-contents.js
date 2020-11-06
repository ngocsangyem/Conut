export default class PageViewContents {
	render(pages) {
		return `
			<div class="page-view-contents">
				${pages.map((page, index) => {
					return `
						<div class="page-view-content ${
							index === 0 ? 'is-active' : ''
						}" data-content="${page}">
							
						</div>
					`;
				})}
			</div>
		`;
	}
}
