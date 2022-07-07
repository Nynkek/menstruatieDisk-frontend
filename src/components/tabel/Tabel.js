import React, {useEffect, useState} from 'react';
import DataTable from 'react-data-table-component';
import axios from "axios";
import "./tabel.css";

function Tabel() {
    const [menstrualDiscs, setMenstrualDiscs] = useState([]);
    const [filteredDiscs, setFilteredDiscs] = useState([]);
    const [filterText, setFilterText] = React.useState('');
    const [bmm, setBmm] = useState('');
    const [reusable, setReusable] = useState('');
    const [stem, setStem] = useState('');
    const [selectedOption, setSelectedOption] = useState()
    const source = axios.CancelToken.source();

    useEffect(() => {
        return function cleanup() {
            source.cancel();
        }
    }, []);

    useEffect(() => {
        axios.get("http://localhost:8080/discs/")
            .then((response) => {
                setMenstrualDiscs(response.data);
                setFilteredDiscs(response.data)
                console.log(menstrualDiscs.data);
                console.log(response.data[0].image.fileName);

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
            width: "80px",
            cell: row => <img height="53px" width="83px" alt={row.image.fileName} src={row.image.url}/>,

        },
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true,
            compact: false,
            wrap: true,
            cell: (row) => <a href={row.linkToStore} target="_blank"
                              rel="noopener noreferrer">{row.name} {row.model}</a>,
        },

        {
            name: 'Breedte',
            selector: row => row.width + "mm",
            sortable: true,
            compact: true,
            maxWidth: "50px",
        },
        {
            name: 'Inhoud',
            selector: row => row.capacity + "ml",
            sortable: true,
            compact: true,
            maxWidth: "50px",

        },

        {
            name: 'Hardheid',
            selector: row => row.firmness.toLowerCase(),
            sortable: true,
            compact: true,
            hide: "md",
            maxWidth: "50px",
        },
        {
            name: 'Materiaal',
            selector: row => row.material.toLowerCase(),
            sortable: true,
            compact: true,
            hide: "md",
            maxWidth: "50px",

        },
        {
            name: 'Vorm',
            selector: row => row.shape.toLowerCase(),
            sortable: true,
            compact: true,
            hide: "md",
            maxWidth: "50px",
        },
        {
            name: 'Merk',
            selector: row => row.brand,
            sortable: true,
            compact: true,
            hide: "md",
            maxWidth: "50px",
            wrap: true,
        },
        {
            name: 'Design',
            selector: row => row.designFeature,
            sortable: true,
            compact: true,
            wrap: true,
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
        <div className="tabel">
            <h4 className="legend">Baarmoedermondhoogte (bepaalt de breedte van de disk)</h4>
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

                <h4 className="legend">Herbruikbaar?</h4>
                <label><input type="radio" value="ja-hbb" name="herbruikbaar" onChange={handleOptionChange}
                              checked={reusable === "ja-hbb"}/>
                    Ik wil een herbruikbare disk (gaat tot 10 jaar mee, vanaf €20)</label><br/>
                <label><input type="radio" value="nee-hbb" name="herbruikbaar" onChange={handleOptionChange}
                              checked={reusable === "nee-hbb"}/>
                    Ik wil een wegwerp exemplaar (gaat 1x mee, rond de €4 per stuk)</label><br/>
                <label><input type="radio" value="geen-hbb" name="herbruikbaar" onChange={handleOptionChange}
                              checked={reusable === "geen-hbb"}/>
                    Maakt me niet uit, laat me alle opties zien.</label>

                <h4 className="legend">Steeltje?</h4>
                <label> <input type="radio" value="ja-steel" name="steel" onChange={handleOptionChange}
                               checked={stem === "ja-steel"}/>
                    Ik wil extra hulp bij het eruit halen. Dus een disk met een
                    steeltje.</label><br/>
                <label><input type="radio" value="nee-steel" name="steel" onChange={handleOptionChange}
                              checked={stem === "nee-steel"}/>
                    Het maakt me niet uit, laat me alle opties zien.</label><br/>
                <button type="button" onClick={resetFilters} className="reset-btn">X Reset</button>
            </form>
            <br/>

            <div className="discsTabel">
                <DataTable
                    columns={columns}
                    data={data}
                    striped={true}
                    highlightOnHover={true}
                    dense={true}
                    persistTableHead={true}
                    noDataComponent="Met deze specificaties zijn er geen disks gevonden. Probeer eens een ander antwoord te geven."
                />
            </div>
        </div>
    );
}

export default Tabel;