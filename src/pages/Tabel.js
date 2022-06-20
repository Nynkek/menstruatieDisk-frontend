import React, {useEffect, useState} from 'react';
import DataTable from 'react-data-table-component';
import axios from "axios";
import "../components/tabel.css";

function Tabel(props) {
    const [menstrualDiscs, setMenstrualDiscs] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/discs/")
            .then((response) => {
                setMenstrualDiscs(response.data);
                console.log(response.data);
            }).catch(error => {
            console.error('There was an error!', error);
        });

    }, []);

    const columns = [
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true,
            compact: true,
            wrap: true,

        },
        {
            name: 'Merk',
            selector: row => row.brand,
            sortable: true,
            compact: true,


        },
        {
            name: 'Maat',
            selector: row => row.model,
            sortable: true,
            compact: true,


        },
        {
            name: 'Breedte',
            selector: row => row.width,
            sortable: true,
            compact: true,

        },
        {
            name: 'Inhoud',
            selector: row => row.capacity,
            sortable: true,
            compact: true,

        },
        {
            name: 'Design-opmerkingen',
            selector: row => row.designFeature,
            sortable: true,
            compact: true,
            wrap: true,
            hide: 'sm',

        },
        {
            name: 'Hardheid',
            selector: row => row.firmness,
            sortable: true,
            compact: true,

        },
        {
            name: 'Materiaal',
            selector: row => row.material,
            sortable: true,
            compact: true,

        },
        {
            name: 'Vorm',
            selector: row => row.shape,
            sortable: true,
            compact: true,

        },
        {
            name: 'link',
            selector: row => row.linkToStore,
            sortable: true,
            compact: true,
            button: true,
            wrap: true,

        },
    ];
    const data = menstrualDiscs;

    return (
        <DataTable
            title="Menstruatiedisks vergelijkingstabel"
            columns={columns}
            data={data}
            striped={true}
            highlightOnHover={true}
            dense={true}
            persistTableHead={true}
            noDataComponent="geen data"



        />
    );
}

export default Tabel;