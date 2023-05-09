import TopBar from '../../CommonComponent/TopBar/topBar';
import CompareDetailsSection from './CompareSections/CompareDetailsSection';
import './VitaComparePageStyle.css';

function VitaComparePage() {
    return (
        <div>
            <CompareDetailsSection></CompareDetailsSection>
            <TopBar></TopBar>
        </div>
    );
}

export default VitaComparePage;