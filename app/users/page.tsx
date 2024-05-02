import { Payment,columns } from './columns';
import   DataTable    from './data-table';


async function getData():Promise<Payment[]>{
    return [
        {
            id: '020393',
            amount:100,
            status:'pending',
            email: "marcuoware@gmail.com"
        },
        {
            id: '0208893',
            amount:200,
            status:'processing',
            email: "cuoware@gmail.com"
        },
        {
            id: '3004944',
            amount:239,
            status:'failed',
            email: "oware@gmail.com"
        },
        {
            id: '0334393',
            amount:81,
            status:'success',
            email: "marcuo@gmail.com"
        },
        {
            id: '1020393',
            amount:1100,
            status:'failed',
            email: "marre@gmail.com"
        },
        {
            id: '3020393',
            amount:105,
            status:'processing',
            email: "maoware@gmail.com"
        },
        {
            id: '3320393',
            amount:330,
            status:'success',
            email: "marcuoe@gmail.com"
        },
        {
            id: '0203935',
            amount:100,
            status:'processing',
            email: "macore@gmail.com"
        },
        {
            id: '4440393',
            amount:444,
            status:'pending',
            email: "aruoare@gmail.com"
        },
        {
            id: '0211393',
            amount:888,
            status:'processing',
            email: "ware@gmail.com"
        },
        {
            id: '3020393',
            amount:990,
            status:'success',
            email: "ware@gmail.com"
        },
        {
            id: '0230393',
            amount:8998,
            status:'failed',
            email: "oware@gmail.com"
        },
        {
            id: '5020393',
            amount:200,
            status:'processing',
            email: "marcue@gmail.com"
        },
        {
            id: '60420393',
            amount:100,
            status:'pending',
            email: "cuowa@gmail.com"
        },
        {
            id: '0393',
            amount:100,
            status:'pending',
            email: "arow@gmail.com"
        },
        {
            id: '020',
            amount:100,
            status:'pending',
            email: "mcore@gmail.com"
        },
        {
            id: '0293',
            amount:100,
            status:'pending',
            email: "mcar@gmail.com"
        },
        {
            id: '93',
            amount:100,
            status:'pending',
            email: "arc@gmail.com"
        },
        {
            id: '5393',
            amount:100,
            status:'pending',
            email: "marware@gmail.com"
        },
        {
            id: '023',
            amount:1503,
            status:'pending',
            email: "maare@gmail.com"
        },
        {
            id: '82033',
            amount:100,
            status:'pending',
            email: "macoe@gmail.com"
        },
        {
            id: '03223520393',
            amount:100,
            status:'pending',
            email: "rowe@gmail.com"
        },
    ]
}
export default async function Users() {
    const data =await getData();
  return (
    <div className='container mx-auto py-10'>
        <div className='pt-16 '>
            <DataTable 
            columns={columns} 
            data={data}/>

        </div>

    </div>
  )
}
