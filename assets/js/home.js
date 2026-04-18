const isLogin = JSON.parse(localStorage.getItem('isLogin'))

if (!isLogin) {
  window.location.href = '../../index.html'
}



const data = [{
  title: 'Ask for help clearly',
  description: 'Create structured requests with category, urgency, AI suggestions, and tags that attract the right people.'
}, {
  title: 'Discover the right people',
  description: 'Use the explore feed, helper lists, notifications, and messaging to move quickly once a match happens.'
}, {
  title: 'Track real contribution',
  description: 'rust scores, badges, solved requests, and rankings help the community recognize meaningful support.'
}]


const solvingTogetherContainer = document.querySelector('#solving-problem-container')

const renderList = () => {

  solvingTogetherContainer.innerHTML = data.map((item) => (
    `
    <article class="feature-card-light fade-in">
            <h3>${item.title}</h3>
            <p>${item.description}</p>
    </article>
    `
  )).join('')

}

renderList()


const data2 = [
  {
    iconTitle: 'Urgent',
    type: 'urgent',
    title: 'Need help debugging React hook',
    description: 'useEffect is firing infinitely despite the correct deps array — community rescue needed.',
    icons: ['React', "Hooks"]
  },
  {
    iconTitle: 'Design',
    type: '',
    title: 'Figma component library review',
    description: 'Looking for a mentor to review my auto-layout and variant patterns before handoff.',
    icons: ['Figma', 'Design']
  },
  {
    iconTitle: 'Solved',
    type: 'success',
    title: 'Python data pipeline optimization',
    description: 'Reduced a 40-minute batch job to under 4 minutes with community help.',
    icons: ['Python', 'Pandas']
  }
]

const communityProblemsContainer = document.querySelector('#community-problems-container')

const renderList2 = () => {

  communityProblemsContainer.innerHTML = data2.map((item) => (
    `
    <article class="request-card fade-in">
            <span class="tag ${item.type}">${item.iconTitle}</span>
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            <div class="tag-row">
              ${item.icons.map((icon) => `<span class="tag">${icon}</span>`).join('')}
            </div>
    </article>
  `
  )).join('')

}

renderList2()