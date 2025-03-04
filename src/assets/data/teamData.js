import img1 from '../team/COMPANY_1.jpeg'
import img3 from '../team/COMPANY_3.jpeg'
import img10 from '../team/COMPANY_10.jpg'
import img12 from '../team/COMPANY_12.webp'
import img2 from '../team/COMPANY_2.jpeg'
import img4 from '../team/COMPANY_4.jpeg'
import img6 from '../team/COMPANY_6.jpg'
import img11 from '../team/COMPANY_11.jpeg'
import img0 from '../team/COMPANY_CHIEF.jpeg'
import img7 from '../team/COMPANY_7.jpg'
import img5 from '../team/COMPANY_5.jpeg'
import img9 from '../team/COMPANY_9.jpeg'
import img8 from '../team/COMPANY_8.jpeg'

const teamData = [
  { name: 'Team1', role: 'Team1_', class: 'grid-item-1', image: img1 },

  { name: 'Team3', role: 'Team3_', class: 'grid-item-3', image: img3 },
  { name: 'Team10', role: 'Team10_', class: 'grid-item-10', image: img10 },
  { name: 'Team12', role: 'Team12_', class: 'grid-item-12', image: img12 },

  { name: 'Team2', role: 'Team2_', class: 'grid-item-2', image: img2 },
  { name: 'Team4', role: 'Team4_', class: 'grid-item-4', image: img4 },
  { name: 'Team6', role: 'Team6_', class: 'grid-item-6', image: img6 },
  { name: 'Team11', role: 'Team11_', class: 'grid-item-11', image: img11 },

  { name: 'Team0', role: 'Team0_', class: 'grid-item-CHIEF', image: img0 },
  { name: 'Team7', role: 'Team7_', class: 'grid-item-7', image: img7 },
  { name: 'Team5', role: 'Team5_', class: 'grid-item-5', image: img5 },
  { name: 'Team9', role: 'Team9_', class: 'grid-item-9', image: img9 },
  { name: 'Team8', role: 'Team8_', class: 'grid-item-8', image: img8 },
]

const teamGridData = teamData.filter(
  member => member.class !== 'grid-item-CHIEF'
)

export { teamData, teamGridData }
