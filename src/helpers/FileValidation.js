function fileValidation(file) {
    const size = Math.round((file.size / 1024));
    if (size >= 1000) {
        return (
            <p className="error-label">Afbeelding is te groot, selecteer eentje van minder dan 1MB</p>);
    }
}

export default fileValidation;