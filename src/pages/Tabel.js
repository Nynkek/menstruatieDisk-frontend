import React, {useEffect, useState} from 'react';
import DataTable from 'react-data-table-component';
import axios from "axios";
import "../components/tabel/tabel.css";
import {Link} from "react-router-dom";
import FilterComponent from "../components/tabel/FilterComponent";

function Tabel(props) {
    const [menstrualDiscs, setMenstrualDiscs] = useState({
        data: [],
        unfilteredData: [],
    });
    const [filteredDiscs, setFilteredDiscs] = useState([]);
    const [filterText, setFilterText] = React.useState('');
    const [bmm, setBmm] = useState("");
    const [herbuikbaar, setHerbuikbaar] = useState("");
    const [steel, setSteel] = useState("");


    useEffect(() => {
        axios.get("http://localhost:8080/discs/")
            .then((response) => {
                setMenstrualDiscs(
                    {
                        data: response.data,
                        unfilteredData: response.data,
                    }
                );
                console.log(menstrualDiscs.data);
            }).catch(error => {
            console.error('There was an error!', error);
        });

    }, []);


    const subHeaderComponentMemo = React.useMemo(() => {
        const handleClear = () => {
            if (filterText) {
                setFilterText('');
            }
        };

        return (
            <FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear}
                             filterText={filterText}/>
        );
    }, [filterText]);

    const columns = [
        {
            name: 'afbeelding',
            selector: row => row.image,
            sortable: true,
            compact: true,
            cell: row => <img height="53px" width="83px" alt={row.name} src={row.image}/>,
            width: "83px",

        },
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true,
            compact: true,
            wrap: true,
            // width: "14ch",
            cell: (row) => <a href={row.linkToStore} target="_blank"
                              rel="noopener noreferrer">{row.name} {row.model}</a>,
        },

        {
            name: 'Breedte',
            selector: row => row.width + "mm",
            sortable: true,
            compact: true,
            // width: "9ch",
            center: true,
        },
        {
            name: 'Inhoud',
            selector: row => row.capacity + "ml",
            sortable: true,
            compact: true,
            // width: "8ch",
            center: true,
        },

        {
            name: 'Hardheid',
            selector: row => row.firmness.toLowerCase(),
            sortable: true,
            compact: true,
            center: true,
            // width: "10ch",
        },
        {
            name: 'Materiaal',
            selector: row => row.material.toLowerCase(),
            sortable: true,
            compact: true,
            center: true,
            // width: "10ch",
        },
        {
            name: 'Vorm',
            selector: row => row.shape.toLowerCase(),
            sortable: true,
            compact: true,
            center: true,
            // width: "8ch",

        },
        {
            name: 'Merk',
            selector: row => row.brand,
            sortable: true,
            compact: true,
            center: true,
            // width: "12ch",
            hide: "md"

        },
        {
            name: 'Design',
            selector: row => row.designFeature,
            sortable: true,
            compact: true,
            wrap: true,
            // width: "12ch",
        },

    ];
    const data = menstrualDiscs.data;


    function handleOptionChange(e) {
        setBmm(e.target.value);
        switch (e.target.value) {
            case "hoge-bmm":
                console.log(menstrualDiscs.data.width);
                const discList1 = menstrualDiscs.unfilteredData;
                setMenstrualDiscs(
                    {
                        data: discList1.filter(disc => disc.width > 70),
                        unfilteredData: menstrualDiscs.unfilteredData,
                    }
                );
                break;
            case "gem-bmm":
                const discList2 = menstrualDiscs.unfilteredData;
                setMenstrualDiscs(
                    {
                        data: discList2.filter(disc => disc.width > 65 && disc.width < 75),
                        unfilteredData: menstrualDiscs.unfilteredData,
                    }
                );
                break;
            case "lage-bmm":
                const discList3 = menstrualDiscs.unfilteredData;
                setMenstrualDiscs(
                    {
                        data: discList3.filter(disc => disc.width < 69),
                        unfilteredData: menstrualDiscs.unfilteredData,
                    }
                );
                break;
            case "geen-bmm":
            default:
                const discList4 = menstrualDiscs.unfilteredData;
                setMenstrualDiscs(
                    {
                        data: discList4,
                        unfilteredData: menstrualDiscs.unfilteredData,
                    }
                );
        }


    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log("submit")
    }

    return (
        <>
            <h4>Baarmoedermondhoogte (bepaald de breedte van de disk)</h4>
            <form onSubmit={handleSubmit}>
                <label htmlFor="hoge-bmm">
                    <input type="radio" value="hoge-bmm" name="bmm"
                           onChange={handleOptionChange}/>
                    Ik heb een hoge bmm.
                </label><br/>
                <label htmlFor="gem-bmm">
                    <input type="radio" value="gem-bmm" name="bmm" onChange={handleOptionChange}/>
                    Ik heb een gemiddelde bmm.
                </label><br/>
                <label htmlFor="lage-bmm">
                    <input type="radio" value="lage-bmm" name="bmm"
                           onChange={handleOptionChange}/>
                    Ik heb een lage bmm.
                </label><br/>
                <label htmlFor="geen-bmm">
                    <input type="radio" value="geen-bmm" name="bmm"
                           onChange={handleOptionChange}/>
                    Ik weet het niet, geef me gemiddelde disks.
                </label><br/>
                {console.log(bmm)}
                <h4>Herbruikbaar?</h4>
                <input type="radio" value="ja-hbb" name="herbruikbaar"/>
                <label htmlFor="ja-hbb">Ik wil een herbruikbare disk (gaat tot 10 jaar mee)</label><br/>
                <input type="radio" value="nee-hbb" name="herbruikbaar"/>
                <label htmlFor="nee-hbb">Ik wil een wegwerp exemplaar (gaat 1x mee)</label><br/>
                <input type="radio" value="geen-hbb" name="herbruikbaar"/>
                <label htmlFor="geen-hbb">Maakt me niet uit, laat me alle opties zien.</label>
                <h4> Steeltjes?</h4>
                <input type="radio" value="ja-steel" name="steel"/>
                <label htmlFor="ja-steel">Ik wil extra hulp bij het eruit halen. Dus een disk met een
                    steeltje.</label><br/>
                <input type="radio" value="nee-steel" name="steel"/>
                <label htmlFor="nee-steel">Het maakt me niet uit, laat me alle opties zien.</label>
                <button type="submit">laat mijn discs zien!</button>
            </form>

            <div className="discsTabel">
                <FilterComponent/>
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
            </div>
        </>
    );
}

export default Tabel;