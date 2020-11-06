export default class PageViewNav {
	render(pages) {
		return `
			<div class="page-view-nav">
				<ul>
					${pages.map((page, index) => {
						return `
							<li class="${index === 0 ? 'is-active' : ''}" data-page="${page}">
								<a class="page page-${page}" id="page-${page}" href="javascript:void(0)" data-tab="${index}">
									<i class="fad fa-file"></i>
									<span>${page}.html</span>
									<button class="btn-page-delete" type="button">
										<i class="fal fa-times"></i>
									</button>
								</a>
							</li>
						`;
					})}
				</ul>
			</div>
		`;
	}
}
