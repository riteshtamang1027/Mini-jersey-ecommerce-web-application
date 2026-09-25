import CatHeader from './CatHeader'
import SideBar from './SideBar'

export default function ClubKits() {
  return (
    <div className=" px-16 mt-8 space-y-8">
      <CatHeader/>
     <div className='border-t border-gray-200 w-full pt-8'>
         <SideBar/>
     </div>
    </div>
  )
}
