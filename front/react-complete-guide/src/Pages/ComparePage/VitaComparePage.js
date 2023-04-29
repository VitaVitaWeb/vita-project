import TopBar from '../../CommonComponent/TopBar/topBar';
import CompareBeforeSection from './CompareSections/CompareBeforeSection';
import CompareDetailsSection from './CompareSections/CompareDetailsSection';
import './VitaComparePageStyle.css';

function VitaComparePage() {
    return (
        <div>
            <CompareBeforeSection></CompareBeforeSection>
            <CompareDetailsSection></CompareDetailsSection>
            <TopBar></TopBar>
        </div>
    );
}

export default VitaComparePage;