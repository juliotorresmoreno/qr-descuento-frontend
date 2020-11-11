
import React, { useState } from 'react';
import CrudMenu from '../Crud/CrudMenu';
import CrudTable, { Column } from '../Crud/CrudTable';
import CampaignForm from '../Forms/CampaignForm';

const columns: Column[] = [
    {
        name: 'name',
        title: 'Campaña'
    },
    {
        name: 'created_at',
        title: 'Creado en',
        style: {
            width: 150
        }
    }
]

const data = [
    {
        id: '1',
        name: 'Camñaass',
        created_at: new Date().toISOString()
    }
]

const Campaign = () => {
    const [active, setActive] = useState(null);
    const onPrint = () => {
        alert('print');
    }
    return (
        <>
            <CrudMenu
                onPrint={onPrint}
                active={active}
                form={CampaignForm} />
            <br /><br />
            <CrudTable
                onChange={setActive}
                active={active}
                columns={columns}
                data={data} />
        </>
    )
}

export default Campaign;
