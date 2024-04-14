import { Edit, Trash2 } from "lucide-react"
import { Item } from "./item"

export const Editor = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="border-b-2 flex items-center mx-5 justify-between">
       <span className="font-normal text-lg ">#Personal</span>
       <div className=" gap-x-5 flex items-center">
          <Item label="Edit" icon={Edit}/>
           <Trash2 className="h-6 w-6  text-red-600 shrink-0 text-muted-foreground" role="button"/>
        </div>
      </div>
      <div className="py-3 px-20 ">
        <div>
        <span className="font-normal text-lg">A beatuitful day meet my old school friend</span>
        </div>
        <div className=" h-0.5 bg-slate-400 mx-2 my-3"></div>
        <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni molestias odio et ducimus in nesciunt nam voluptates libero atque id necessitatibus illum distinctio qui eius iure quidem error maxime veniam mollitia architecto repellat, neque iste. Accusantium quibusdam nihil eligendi quae praesentium sunt nisi optio voluptatum totam nam deserunt temporibus, accusamus nemo cum unde perspiciatis tempore saepe rerum omnis quia cumque tenetur, 
        
        architecto et! Autem, iure itaque nesciunt amet fugiat deserunt, quisquam minus, eum est voluptates enim. Minus molestiae sequi ab eveniet nulla totam temporibus illum quia doloremque? Fugiat totam quisquam illum atque sunt qui reiciendis dolore hic, illo accusamus unde, enim nobis quaerat sequi reprehenderit pariatur corrupti iste nulla aut, praesentium voluptate dolor! Vero quod culpa velit ex hic dolor mollitia maxime ea, laboriosam provident aperiam exercitationem cumque accusamus dolorum voluptates numquam quibusdam. Deleniti natus vel vero culpa maxime distinctio doloribus nesciunt recusandae laboriosam repellendus ex beatae eligendi voluptatum veritatis at magnam, itaque tempore similique quasi debitis eveniet placeat ab rem excepturi. Tempore repellendus aliquam quaerat molestias nesciunt iure perspiciatis praesentium perferendis dolores vitae sapiente maxime fugit sequi, earum voluptate! Tempore suscipit excepturi sint dolorem sunt esse incidunt, molestiae, minima est aliquid adipisci saepe doloribus cumque dolorum, perspiciatis a magnam.
        </span>
        
      </div>
    </div>
  )
}
