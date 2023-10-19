import { addHours } from "date-fns";
import { useCalendarStore, useUiStore } from "../../hooks"

export const FabAddNew = () => {

    const { openDateModal } = useUiStore();
    const { setActiveEvent } = useCalendarStore();

    const handleClickNew = () => {
        setActiveEvent({

            title: '', // obligatorio
            notes: '',
            start: new Date(), // obligatorio
            end: addHours(new Date(), 2), // obligatorio
            bgColor: '#fafafa',
            user: {
                _id: '123',
                name: 'Lisandro'
            }
        });

        openDateModal();
    };

    return (
        <button className="btn btn-primary fab" onClick={handleClickNew}><i className="fas fa-plus"></i></button>
    )
}
