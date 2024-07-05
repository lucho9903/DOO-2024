package co.edu.uco.deviucopay.business.usecase.impl.tipoInstitucion;

import java.util.List;

import co.edu.uco.deviucopay.business.assembler.entity.impl.TipoInstitucionAssemblerEntity;
import co.edu.uco.deviucopay.business.domain.TipoInstitucionDomain;
import co.edu.uco.deviucopay.business.usecase.UseCaseWithReturn;
import co.edu.uco.deviucopay.crosscutting.exceptions.customs.BusinessDeviUcopayException;
import co.edu.uco.deviucopay.crosscutting.exceptions.messageCatalog.MessageCatalogStrategy;
import co.edu.uco.deviucopay.crosscutting.exceptions.messageCatalog.data.CodigoMensaje;
import co.edu.uco.deviucopay.crosscutting.helpers.ObjectHelper;
import co.edu.uco.deviucopay.data.dao.factory.DAOFactory;

public class ConsultarTipoInstitucion implements UseCaseWithReturn<TipoInstitucionDomain, List<TipoInstitucionDomain>> {

    private DAOFactory factory;

    public ConsultarTipoInstitucion(final DAOFactory factory) {
        if (ObjectHelper.getObjectHelper().isNull(factory)) {
            var mensajeUsuario = MessageCatalogStrategy.getContenidoMensaje(CodigoMensaje.M00025);
            var mensajeTecnico = MessageCatalogStrategy.getContenidoMensaje(CodigoMensaje.M00026);
            throw new BusinessDeviUcopayException(mensajeUsuario, mensajeTecnico);
        }

        this.factory = factory;
    }

    @Override
    public List<TipoInstitucionDomain> execute(TipoInstitucionDomain data) {
        var tipoInstitucionEntityFilter = TipoInstitucionAssemblerEntity.getInstance().toEntity(data);
        var resultadoEntity = factory.getTipoInstitucionDAO().consultar(tipoInstitucionEntityFilter);
        return TipoInstitucionAssemblerEntity.getInstance().toDomainCollection(resultadoEntity);
    }
}
