package co.edu.uco.deviucopay.business.facade.impl.tipoInstitucion;

import java.util.List;

import co.edu.uco.deviucopay.business.assembler.dto.impl.TipoInstitucionAssemblerDTO;
import co.edu.uco.deviucopay.business.facade.FacadeWithReturn;
import co.edu.uco.deviucopay.business.usecase.impl.tipoInstitucion.ConsultarTipoInstitucion;
import co.edu.uco.deviucopay.crosscutting.exceptions.DeviUcopayException;
import co.edu.uco.deviucopay.crosscutting.exceptions.customs.BusinessDeviUcopayException;
import co.edu.uco.deviucopay.crosscutting.exceptions.messageCatalog.MessageCatalogStrategy;
import co.edu.uco.deviucopay.crosscutting.exceptions.messageCatalog.data.CodigoMensaje;
import co.edu.uco.deviucopay.data.dao.factory.DAOFactory;
import co.edu.uco.deviucopay.dto.TipoInstitucionDTO;

public class ConsultarTipoInstitucionFacade implements FacadeWithReturn<TipoInstitucionDTO, List<TipoInstitucionDTO>> {

	private DAOFactory daoFactory;

	public ConsultarTipoInstitucionFacade() {
		daoFactory = DAOFactory.getFactory();
	}

	@Override
	public List<TipoInstitucionDTO> execute(final TipoInstitucionDTO dto) {

		try {
			var usecase = new ConsultarTipoInstitucion(daoFactory);
			var tipoInstitucionDomain = TipoInstitucionAssemblerDTO.getInstance().toDomain(dto);
			var resultadosDomain = usecase.execute(tipoInstitucionDomain);
			return TipoInstitucionAssemblerDTO.getInstance().toDTOCollection(resultadosDomain);

		} catch (final DeviUcopayException exception) {
			throw exception;
		} catch (final Exception exception) {

			var mensajeUsuario = MessageCatalogStrategy.getContenidoMensaje(CodigoMensaje.M00023);
			var mensajeTecnico = MessageCatalogStrategy.getContenidoMensaje(CodigoMensaje.M00024);

			throw new BusinessDeviUcopayException(mensajeTecnico, mensajeUsuario, exception);

		} finally {
			daoFactory.cerrarConexion();
		}
	}
}
