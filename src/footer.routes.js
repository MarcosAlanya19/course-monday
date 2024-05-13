// @mui icons

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images

const date = new Date().getFullYear();

export default {
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      Reservados todos los derechos. Copyright {date} © ESTRELLITAS.
    </MKTypography>
  ),
};
