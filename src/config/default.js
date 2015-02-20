/**
 * Created by sph3r on 02/18/15.
 */

module.exports = {

    PRM_INPUTFOLDER: "../prm/",
    PRM_OUTPUTFOLDER: "../prm/json",
    PRM_EXT: ".prm",

    DS: "file",

    REGEX_DEFS: {
        atom: /[^#]atom\s*(\d+)\s*(\d+)\s*(\w+)\s*"(.+)"\s*(\d+)\s*([0-9]+\.?[0-9]*)\s*(\d+)/g,
        vdw: /[^#]vdw\s*(\d+)\s*([0-9]+\.?[0-9]*)\s*([0-9]+\.?[0-9]*)/g,
        bond: /[^#]bond\s*(\d+)\s*(\d+)\s*([0-9]+\.?[0-9]*)\s*([0-9]+\.?[0-9]*)/g,
        angle: /[^#]angle\s*(\d+)\s*(\d+)\s*(\d+)\s*([0-9]+\.?[0-9]*)\s*([0-9]+\.?[0-9]*)/g,
        imptors: /[^#]imptors\s*(\d+)\s*(\d+)\s*(\d+)\s*(\d+)\s*([0-9]+\.?[0-9]*)\s*([0-9]+\.?[0-9]*)\s*([0-9]+\.?[0-9]*)/g,
        torsion: /[^#]torsion\s*(\d+)\s*(\d+)\s*(\d+)\s*(\d+)\s*([-+]?[0-9]+\.?[0-9]*)\s*([-+]?[0-9]+\.?[0-9]*)\s*([-+]?[0-9]+\.?[0-9]*)\s*([-+]?[0-9]+\.?[0-9]*)\s*([-+]?[0-9]+\.?[0-9]*)\s*([-+]?[0-9]+\.?[0-9]*)\s*([-+]?[0-9]+\.?[0-9]*)\s*([-+]?[0-9]+\.?[0-9]*)\s*([-+]?[0-9]+\.?[0-9]*)/g,
        charge: /[^#]charge\s*(\d+)\s*([-+]?[0-9]+\.?[0-9]*)/g
    },
    REGEX_GROUPNAME_DEFS: {
        atom: ['id', 'familyID', { name: 'familyName', type: 'string' }, { name: 'description', type: 'string' }, 'atomicNumber', 'mass', 'valency'],
        vdw: ['id', 'sigma', 'epsilon'],
        bond: ['fID1', 'fID2', 'p1', 'p2'],
        angle: ['fID1', 'fID2', 'fID3', 'p1', 'p2'],
        imptors: ['fID1', 'fID2', 'fID3', 'fID4', 'p1', 'p2', 'p3'],
        torsion: ['fID1', 'fID2', 'fID3', 'fID4', 'p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7', 'p8', 'p9'],
        charge: ['id', 'charge']
    }
};