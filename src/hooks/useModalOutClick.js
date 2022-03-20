import { useEffect } from 'react';

export const useModalOutClick = (modalRef, setModalOpen) => {
    
    useEffect(() => {
        const modalOutClick = (e) => {
            if(!modalRef.current.contains(e.target)) {
                setModalOpen(false);
            }
        };
        
        window.addEventListener("click", modalOutClick);

        return () => window.removeEventListener('click', modalOutClick);
    }, []);
};