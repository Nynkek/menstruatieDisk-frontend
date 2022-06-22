import React, {useEffect, useState} from 'react';
import DataTable from 'react-data-table-component';
import axios from "axios";
import "../components/tabel/tabel.css";
import FilterComponent from "../components/tabel/FilterComponent";

function Tabel() {
    const [menstrualDiscs, setMenstrualDiscs] = useState([]);
    const [filteredDiscs, setFilteredDiscs] = useState([]);
    const [filterText, setFilterText] = React.useState('');
    const [bmm, setBmm] = useState('');
    const [reusable, setReusable] = useState('');
    const [stem, setStem] = useState('');
    const [selectedOption, setSelectedOption] = useState()

    useEffect(() => {
        axios.get("http://localhost:8080/discs/")
            .then((response) => {
                setMenstrualDiscs(response.data);
                setFilteredDiscs(response.data)
                console.log(menstrualDiscs.data);
            }).catch(error => {
            console.error('There was an error!', error);
        });

    }, []);


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
            width: "110px",
            cell: (row) => <a href={row.linkToStore} target="_blank"
                              rel="noopener noreferrer">{row.name} {row.model}</a>,
        },

        {
            name: 'Breedte',
            selector: row => row.width + "mm",
            sortable: true,
            compact: true,
            width: "60px",
            center: true,
        },
        {
            name: 'Inhoud',
            selector: row => row.capacity + "ml",
            sortable: true,
            compact: true,
            width: "60px",
            center: true,
        },

        {
            name: 'Hardheid',
            selector: row => row.firmness.toLowerCase(),
            sortable: true,
            compact: true,
            width: "70px",
            hide: "md"
        },
        {
            name: 'Materiaal',
            selector: row => row.material.toLowerCase(),
            sortable: true,
            compact: true,
            width: "70px",
            hide: "md"
        },
        {
            name: 'Vorm',
            selector: row => row.shape.toLowerCase(),
            sortable: true,
            compact: true,
            width: "60px",
            hide: "md"

        },
        {
            name: 'Merk',
            selector: row => row.brand,
            sortable: true,
            compact: true,
            width: "12ch",
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
    const data = filteredDiscs;

    useEffect(() => {
        let discList = menstrualDiscs;

        switch (bmm) {
            case "hoge-bmm":
                discList = discList.filter(disc => disc.width >= 68);
                break;
            case "gem-bmm":
                discList = discList.filter(disc => disc.width > 65 && disc.width < 75);
                break;
            case "lage-bmm":
                discList = discList.filter(disc => disc.width < 68);
                break;
            case "geen-bmm":
                discList = discList.filter(disc => disc.width > 53);
                break;
            default:
        }
        switch (reusable) {
            case "ja-hbb":
                discList = discList.filter(disc => disc.reusable === true)
                break;
            case "nee-hbb":
                discList = discList.filter(disc => disc.reusable === false)
                break;
            case "geen-hbb":
            default:
        }
        switch (stem) {
            case "ja-steel":
                discList = discList.filter(disc => disc.hasStem === true)
                break;
            case "nee-steel":
                break;
            default:
        }
        setFilteredDiscs(discList);

    }, [bmm, reusable, stem])

    function handleOptionChange(e) {
        if (e.target.name === "bmm") {
            setBmm(e.target.value);
        } else if (e.target.name === "herbruikbaar") {
            setReusable(e.target.value);
        } else if (e.target.name === "steel") {
            setStem(e.target.value);
        }
        setSelectedOption(e.target.value);
    }

    function resetFilters() {
        setFilteredDiscs(menstrualDiscs);
        setBmm('');
        setReusable('');
        setStem('');
    }

    return (
        <>
            <h4>Baarmoedermondhoogte (bepaalt de breedte van de disk)</h4>
            <form>
                <label>
                    <input type="radio" value="hoge-bmm" name="bmm"
                           onChange={handleOptionChange} checked={bmm === "hoge-bmm"}/>
                    Ik heb een hoge bmm.
                </label><br/>
                <label>
                    <input type="radio" value="gem-bmm" name="bmm" onChange={handleOptionChange}
                           checked={bmm === "gem-bmm"}/>
                    Ik heb een gemiddelde bmm.
                </label><br/>
                <label>
                    <input type="radio" value="lage-bmm" name="bmm"
                           onChange={handleOptionChange} checked={bmm === "lage-bmm"}/>
                    Ik heb een lage bmm.
                </label><br/>
                <label>
                    <input type="radio" value="geen-bmm" name="bmm"
                           onChange={handleOptionChange} checked={bmm === "geen-bmm"}/>
                    Ik weet het niet, geef me gemiddelde disks.
                </label><br/>

                <h4>Herbruikbaar?</h4>
                <label><input type="radio" value="ja-hbb" name="herbruikbaar" onChange={handleOptionChange}
                              checked={reusable === "ja-hbb"}/>
                    Ik wil een herbruikbare disk (gaat tot 10 jaar mee)</label><br/>
                <label><input type="radio" value="nee-hbb" name="herbruikbaar" onChange={handleOptionChange}
                              checked={reusable === "nee-hbb"}/>
                    Ik wil een wegwerp exemplaar (gaat 1x mee)</label><br/>
                <label><input type="radio" value="geen-hbb" name="herbruikbaar" onChange={handleOptionChange}
                              checked={reusable === "geen-hbb"}/>
                    Maakt me niet uit, laat me alle opties zien.</label>

                <h4>Steeltjes?</h4>
                <label> <input type="radio" value="ja-steel" name="steel" onChange={handleOptionChange}
                               checked={stem === "ja-steel"}/>
                    Ik wil extra hulp bij het eruit halen. Dus een disk met een
                    steeltje.</label><br/>
                <label><input type="radio" value="nee-steel" name="steel" onChange={handleOptionChange}
                              checked={stem === "nee-steel"}/>
                    Het maakt me niet uit, laat me alle opties zien.</label><br/>
                <button type="button" onClick={resetFilters}>X Reset</button>
            </form>
            <br/>

            <div className="discsTabel">
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