const teamData = [
  { name: 'Team1', role: 'Team1_', class: 'grid-item-1', image: '/photo/COMPANY_1.jpeg' },

  { name: 'Team3', role: 'Team3_', class: 'grid-item-3', image: '/photo/COMPANY_3.jpeg' },
  { name: 'Team10', role: 'Team10_', class: 'grid-item-10', image: '/photo/COMPANY_10.jpg' },
  { name: 'Team12', role: 'Team12_', class: 'grid-item-12', image: '/photo/COMPANY_12.webp' },

  { name: 'Team2', role: 'Team2_', class: 'grid-item-2', image: '/photo/COMPANY_2.jpeg' },
  { name: 'Team4', role: 'Team4_', class: 'grid-item-4', image: '/photo/COMPANY_4.jpeg' },
  { name: 'Team6', role: 'Team6_', class: 'grid-item-6', image: '/photo/COMPANY_6.jpg' },
  { name: 'Team11', role: 'Team11_', class: 'grid-item-11', image: '/photo/COMPANY_11.jpeg' },

  { name: 'Team0', role: 'Team0_', class: 'grid-item-CHIEF', image: '/photo/COMPANY_CHIEF.jpeg' },
  { name: 'Team7', role: 'Team7_', class: 'grid-item-7', image: '/photo/COMPANY_7.jpg' },
  { name: 'Team5', role: 'Team5_', class: 'grid-item-5', image: '/photo/COMPANY_5.jpeg' },
  { name: 'Team9', role: 'Team9_', class: 'grid-item-9', image: '/photo/COMPANY_9.jpeg' },
  { name: 'Team8', role: 'Team8_', class: 'grid-item-8', image: '/photo/COMPANY_8.jpeg' },
]

const teamGridData = teamData.filter(member => member.class !== 'grid-item-CHIEF')

export {
  teamData,
  teamGridData
}
